import { createClient } from "@/utils/supabase/server";
export default async function Page() {
  const supabase = createClient();
  const { data: restaurants } = await supabase.from("restaurants").select();
  return (
    <div>
      <pre>{JSON.stringify(restaurants, null, 2)}</pre>
    </div>
  );
}
