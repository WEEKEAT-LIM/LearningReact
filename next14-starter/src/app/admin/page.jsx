"use client";
import styles from "./admin.module.css"
import { Suspense } from "react";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminUsers from "@/components/AdminUsers/AdminUsers";
import AdminUserForm from "@/components/AdminUserForm/AdminUserForm";
import { useSession } from "next-auth/react";

function admin()
{
  const {data:session} = useSession();
  const userId = session?.user?.id;
        return(
        <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col}>
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminPosts />
                </Suspense>
              </div>
              <div className={styles.col}>
                <AdminPostForm userId = {userId} />
              </div>
            </div>
            <hr/>
            <div className={styles.row}>
              <div className={styles.col}>
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminUsers />
                </Suspense>
              </div>
              <div className={styles.col}>
                <AdminUserForm />
              </div>
            </div>
    </div>
    );
}


export default admin