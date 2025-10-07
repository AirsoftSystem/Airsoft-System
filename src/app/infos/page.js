"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InfosRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirection vers ton build Flutter statique
    window.location.href = "/infos/index.html";
  }, [router]);

  return null;
}
