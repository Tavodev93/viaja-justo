"use client";

import { useEffect, useState } from "react";
import { hasActiveAccess } from "../lib/access";

export function useAccess() {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasAccess(hasActiveAccess());
  }, []);

  return { hasAccess };
}
