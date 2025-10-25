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
import TextArea from '../input/TextArea';
import Button from '@/components/ui/button/Button';
import { TfiSave } from "react-icons/tfi";

type Props = {
  title : string,
  instruction : string
}


export default function ProfilDesaForm() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");

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
          <Input type='text'></Input>
        </div>
        <div>
          <Label>Jumlah Penduduk</Label>
          <Input type='number'></Input>
        </div>
        <div className='w-full'>
         <Button size="md" className='w-full' variant="primary" startIcon={<TfiSave />}>
            Simpan
         </Button>
        </div>
      </form>
   
  );
}
