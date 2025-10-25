
import { Metadata } from "next";
import React from "react";
import PerangkatDesaForm from "@/components-custom/form/perangkatDesaForm";
import FasilitasPublikForm from "@/components-custom/form/fasilitasPublikForm";

export const metadata: Metadata = {
  title: "Fasilitas Publik",
  description:
    "Fasilitas Publik",
};

export default function FasilitasPublik() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Perangkat Desa
        </h3>
        <div className="space-y-6">
          <FasilitasPublikForm />
        </div>
      </div>
    </div>
  );
}
