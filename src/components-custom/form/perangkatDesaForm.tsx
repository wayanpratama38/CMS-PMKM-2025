"use client";
import React, { useState } from 'react';
import Label from '../Label';
import Input from '../input/InputField';
import { useDropzone } from "react-dropzone";
import DropzoneComponent from './DropZone';
import TableDenganAksi from '../table/tabelDenganAksi';
import Button from '@/components/ui/button/Button';
import { TfiSave } from 'react-icons/tfi';


export default function PerangkatDesaForm() {
  
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

  const columns = [
  { header: "Nama", key: "nama" },
  { header: "Jabatan", key: "jabatan" },
  { header: "Foto", key: "foto" },
  ];
  const data = [
    { nama: "I Wayan Satya", jabatan: "Kepala Desa", foto: "foto1.jpg" },
    { nama: "Made Putra", jabatan: "Sekretaris", foto: "foto2.jpg" },
  ];



  const handleEdit = (row) => {
    alert(`Edit data: ${row.nama}`);
  };

  const handleDelete = (row) => {
    alert(`Hapus data: ${row.nama}`);
  };


  return (
      <div className="space-y-6">
        <form className='space-y-6'>

        <div>
          <Label>Nama</Label>
          <Input type="text" placeholder='Florentina Venny, S.E' />
        </div>
        <div>
          <Label>Jabatan</Label>
          <Input type="text" placeholder="Kepala Desa" />
        </div>
        <div>
         <Label>Foto</Label>
         <DropzoneComponent title='Unggah Foto Profil Perangkat Desa' instruction='Unggah foto dengan ekstensi .jgp & .png' />
        </div>
        <div className='w-full'>
         <Button size="md" className='w-full' variant="primary" startIcon={<TfiSave />}>
            Simpan
         </Button>
        </div>
        </form>
        <TableDenganAksi columns={columns} data={data}  onDelete={handleDelete} onEdit={handleEdit} />
      </div>
   
  );
}
