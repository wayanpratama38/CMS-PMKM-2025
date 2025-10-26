"use client";
import React, { useState } from 'react';
import Label from '../Label';
import Input from '../input/InputField';
import TextArea from '../input/TextArea';
import Button from '@/components/ui/button/Button';
import { TfiSave } from "react-icons/tfi";




export default function ProfilDesaForm() {
  const [message, setMessage] = useState("");
  // const [messageTwo, setMessageTwo] = useState("");

  return (
      <form action="post" className="space-y-6">
        <div>
         <Label>Nama Desa</Label>
         <Input type='text' placeholder='Desa Sebadut'></Input>
        </div>
        <div>
          <Label>Visi Desa</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
            placeholder='Memajukkan Kehidupan Warga'
          />
        </div>
        <div>
          <Label>Misi Desa</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
            placeholder='Meningkatkan Literasi Digital'
          />
        </div>
        <div>
          <Label>Link Video</Label>
          <Input type='text' placeholder='https://www.youtube.com/watch?v=rcbUo29jRpM'></Input>
        </div>
        <div className='grid grid-flow-col auto-cols-auto items-center gap-4'>
          <div>
            <Label>Luas Wilayah</Label>
            <Input type='number' placeholder='22.13 km²'></Input>
          </div>
          <div>
            <Label>Jumlah Penduduk</Label>
            <Input type='number' placeholder='3276'></Input>
          </div>
          <div>
            <Label>Jumlah KK</Label>
            <Input type='number' placeholder='935'></Input>
          </div>
          <div>
            <Label>Kepadatan</Label>
            <Input type='number' placeholder='0.65 jiwa/km²'></Input>
          </div>
        </div>
        <div className='w-full'>
         <Button size="md" className='w-full' variant="primary" startIcon={<TfiSave />}>
            Simpan
         </Button>
        </div>
      </form>
   
  );
}
