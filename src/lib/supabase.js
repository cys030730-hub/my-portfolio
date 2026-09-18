import { createClient } from '@supabase/supabase-js';

// 이 프로젝트는 Supabase Auth 로그인을 사용하지 않는다. 세션을 저장/복원하면
// 같은 도메인(*.github.io)의 다른 프로젝트에서 로그인한 세션을 잘못 이어받아
// anon 대신 authenticated 권한으로 요청이 나갈 수 있으므로 세션 기능을 꺼둔다.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  },
);
