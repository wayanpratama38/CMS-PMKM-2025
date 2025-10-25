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
  const obj = {
      id: 1,
      nama: 'Balai Desa',
      kategori: 'Pemerintahan',
      lokasi: 'Jl. Raya Desa No. 1',
      deskripsi: 'Gedung balai desa yang digunakan untuk kegiatan pemerintahan dan pertemuan warga.',
      gambar: 'https://cdn.digitaldesa.com/uploads/profil/32.01.30.2006/common/684bbbbf567012373c488653546d4d34.jpeg',
      status: 'Baik',
      location: `https://www.google.com/maps/place/0%C2%B038'45.3%22N+108%C2%B059'21.0%22E/@0.6459257,108.9865852,17z/data=!3m1!4b1!4m4!3m3!8m2!3d0.6459203!4d108.9891655?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D`
    }
 

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

  return (
      <div className="space-y-6">
        <form className='space-y-6'>
        <div>
          <Label>Nama Tempat</Label>
          <Input type="text" />
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
        <TableDenganAksi />
      </div>
        
   
  );
}
