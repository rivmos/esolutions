import React, { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image';

declare global {
    var cloudinary: any;
}

interface ImageUpladProps {
    onChange: (value: string) => void
    value: string
}

const ImageUpload = (props: ImageUpladProps) => {
    const { onChange, value } = props;

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url)
    }, [onChange])

    return (
        <div>

            <CldUploadWidget uploadPreset="slpqem9l" onSuccess={(result) => handleUpload(result)}>
                {({ open }) => {
                    return (
                        <>
                            <div className="grid grid-cols-1 space-y-2 !cursor-pointer" onClick={() => open()}>
                                <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                                {value ? <Image src={value} width={400} height={400} alt='Uploaded Image' /> : <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                        <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                                            <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                                <Image width={400} height={400} className="has-mask h-36 object-center" src="/img/upload-widget/upload.png" alt="freepik image" />
                                            </div>
                                            <p className="pointer-none text-gray-500 ">Upload an image from your computer</p>
                                        </div>
                                        {/* <input type="file" className="hidden" /> */}
                                    </label>
                                </div>}
                            </div>
                            <p className="text-sm text-gray-300">
                                <span>File type: doc,pdf,types of images</span>
                            </p>
                        </>

                    );
                }}
            </CldUploadWidget>
        </div>
    )
}

export default ImageUpload