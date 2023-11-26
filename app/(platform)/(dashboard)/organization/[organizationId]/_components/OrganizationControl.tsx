"use client";

import { useParams } from "next/navigation";
import { FC, useEffect } from "react";
import { useOrganizationList } from "@clerk/nextjs";

interface OrganizationControlProps {}

const OrganizationControl: FC<OrganizationControlProps> = ({}) => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationId as string,
    });
  }, [params.organizationId, setActive]);

  return null;
};

export default OrganizationControl;
