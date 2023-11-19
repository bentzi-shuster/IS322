"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function SearchAction(previousState, FormData){
    let supabase = createServerComponentClient({
        cookies,
      })
    
      let {
        data: { session },
      } = await supabase.auth.getSession()
    if (!session) {
        redirect('/account/login')
    }
   const query = FormData.get("query");
    const { data, error } = await supabase
    .from("Post")
    .select("id, post_title, post_description, post_visible, post_userid,Post_User_Data(post_user_data_user_id, post_user_data_photo, post_user_data_first_name)")
    // .filter("post_title", "ilike", `%${query}%`)
    .or(`post_title.ilike.%${query}%,post_description.ilike.%${query}%`)
    .filter("post_visible", "eq", "true")
    .order("id", { ascending: false })
    .limit(10);
    if (error) {
        console.log(error);
        return;
    }
    
    Object.assign(previousState, {"data": data, "error": error});
    return previousState;

}

export async function  action(previousState, FormData) {
  let supabase = createServerComponentClient({
    cookies,
  })
      let {
        data: { session },
      } = await supabase.auth.getSession()
    if (!session) {
        redirect('/account/login')
    }
   const fname = FormData.get("first_name");
    const lname = FormData.get("last_name");
    const userdata = await supabase.auth.getUser();
      const { data, error } = await supabase
    .from("Post_User_Data")
    .update({ post_user_data_first_name: fname, post_user_data_last_name: lname })
    .eq("post_user_data_user_id", userdata.data.user.id)
    .select("post_user_data_first_name, post_user_data_last_name");
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
    Object.assign(previousState, {"data": data, "error": error});
    console.log(previousState);
    return previousState;

}