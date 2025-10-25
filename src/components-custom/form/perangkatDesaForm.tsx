"use client";
import React, { useState } from 'react';
import Label from '../Label';
import Input from '../input/InputField';
import Select from '../Select';
import { ChevronDownIcon, EyeCloseIcon, EyeIcon, TimeIcon } from '@/icons';
import { useDropzone } from "react-dropzone";
import DatePicker from '@/components/form/date-picker';
import DropzoneComponent from './DropZone';
import { title } from 'process';
import TableDenganAksi from '../table/tabelDenganAksi';

type Props = {
  title : string,
  instruction : string
}


export default function PerangkatDesaForm() {
  const [showPassword, setShowPassword] = useState(false);
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  // handle upload file
  const onDrop = (acceptedFiles: File[]) => {
    console.log("Files dropped:", acceptedFiles);
    // Handle file uploads here
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
  });

  return (
      <div className="space-y-6">
        <div>
          <Label>Nama</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Jabatan</Label>
          <Input type="text" placeholder="Sekretaris Desa" />
        </div>
        <div>
         <Label>Foto</Label>
         <DropzoneComponent title='Unggah Foto Profil Perangkat Desa' instruction='Unggah foto dengan ekstensi .jgp & .png' />
        </div>
        <TableDenganAksi />
      </div>
   
  );
}
