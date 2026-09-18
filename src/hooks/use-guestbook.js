import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

/**
 * useGuestbook 훅
 *
 * 방명록 목록 조회(portfolio_guestbook_public)와 새 항목 등록(portfolio_guestbook)을 담당한다.
 * email은 비공개 항목이라 공개 뷰에는 포함되지 않으며, 등록 시에만 서버로 전달된다.
 *
 * Example usage:
 * const { entries, isLoading, error, addEntry, isSubmitting } = useGuestbook();
 */
function useGuestbook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEntries = useCallback(async () => {
    setIsLoading(true);
    const { data, error: fetchError } = await supabase
      .from('portfolio_guestbook_public')
      .select('id, name, message, region, keyword, rating, created_at')
      .limit(50);

    if (fetchError) {
      setError(fetchError.message);
    } else {
      setEntries(data ?? []);
      setError(null);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const addEntry = useCallback(
    async ({ name, message, email, region, keyword, rating }) => {
      setIsSubmitting(true);
      const { error: insertError } = await supabase.from('portfolio_guestbook').insert({
        name,
        message,
        email: email || null,
        region: region || null,
        keyword: keyword || null,
        rating: rating || null,
      });
      setIsSubmitting(false);

      if (insertError) {
        return { success: false, error: insertError.message };
      }

      await fetchEntries();
      return { success: true, error: null };
    },
    [fetchEntries],
  );

  return { entries, isLoading, error, addEntry, isSubmitting };
}

export default useGuestbook;
