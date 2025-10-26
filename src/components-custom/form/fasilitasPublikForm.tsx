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
import Button from '@/components/ui/button/Button';
import { TfiSave } from 'react-icons/tfi';


export default function FasilitasPublikForm() {
  // handle upload file
  const onDrop = (acceptedFiles: File[]) => {
    console.log("Files dropped:", acceptedFiles);
    // Handle file uploads here
  };

  const kondisiBangunan = [
    {value : 'baik', label : "Baik"},
    {value : 'kurang baik', label : 'Kurang Baik'},
    {value : 'perlu perbaikan', label : 'Perlu Perbaikan'}
  ]

  const options = [
    { value: "pemerintahan", label: "Pemerintahan" },
    { value: "pendidikan", label: "Pendidikan" },
    { value: "wirausaha", label: "Wirausaha" },
    { value: "lokasi wisata", label: "Lokasi Wisata" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
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
  { header: "Nama Tempat", key: "nama_tempat" },
  { header: "Kategori Bangunan", key: "kategori_bangungan" },
  { header: "Kondisi Bangunan", key: "kondisi_bangunan" },
  { header: "Alamat Lokasi", key: "alamat_lokasi" },
  { header: "Link Google Maps", key: "link_google_maps" },
  { header: "Deskripsi", key: "deskripsi" },
  { header: "Foto", key: "foto" },

];
  const data = [
    { nama_tempat: "Kantor Desa", kategori_bangungan : "Pemerintahan", kondisi_bangunan: "Baik",alamat_lokasi : "Jalan Adisucipto",link_google_maps : "https://www.google.com/maps/place/", deskripsi : "Bangunan yang menjadi tempat melakukan administrasi desa", foto : "foto_bangunan.jpg" },
    
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
          <Label>Nama Tempat</Label>
          <Input type="text" placeholder='SMP Negeri 1 Tjapkala' />
        </div>
        <div>
          <Label>Kategori Bangunan</Label>
         <div className="relative">
           <Select
            options={options}
            placeholder="Pilih Opsi"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
          <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon/>
            </span>
         </div>
        </div>
        <div>
          <Label>Kondisi Bangunan</Label>
         <div className="relative">
           <Select
            options={kondisiBangunan}
            placeholder="Pilih Opsi"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
          <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon/>
            </span>
         </div>
        </div>
        <div>
          <Label>Alamat Lokasi</Label>
          <Input type="text" placeholder='Jl. Raya Desa No.1'/>
        </div>
        <div>
          <Label>Link Lokasi di Google Map</Label>
          <Input type="text" placeholder="https://www.google.com/maps/place/"/>
        </div>
        <div>
          <Label>Deskripsi </Label>
          <Input type="text" placeholder='Sebuah bangunan yang digunakan sebagai tempat melakukan kegiatan bersama' />
        </div>
        <div>
         <Label>Gambar Bangunan</Label>
         <DropzoneComponent title='Unggah Foto Bangunan' instruction='Unggah foto dengan ekstensi .jgp & .png' />
        </div>
        <div className='w-full'>
         <Button size="md" className='w-full' variant="primary" startIcon={<TfiSave />}>
            Simpan
         </Button>
        </div>
        </form>
        <TableDenganAksi columns={columns} data={data} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
        
   
  );
}
