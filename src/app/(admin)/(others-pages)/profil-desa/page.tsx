import UserAddressCard from "@/components/user-profile/UserAddressCard";
import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";
import DropzoneComponent from "@/components/form/form-elements/DropZone";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import { Metadata } from "next";
import React from "react";
import TableWithAction from "@/components/tables/TableWithAction";
import PerangkatDesaForm from "@/components-custom/form/perangkatDesaForm";
import ProfilDesaForm from "@/components-custom/form/profilDesaForm";
import Label from "@/components-custom/Label";

export const metadata: Metadata = {
  title: "Profil Desa",
  description:
    "Profil Desa",
};

export default function ProfilDesa() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profil Desa
        </h3>
        <div className="space-y-6">
          <ProfilDesaForm />          
        </div>
      </div>
    </div>
  );
}
