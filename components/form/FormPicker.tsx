"use client";

import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

const FormPicker: FC<FormPickerProps> = ({ id, errors }) => {
  const { pending } = useFormStatus();

  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });

        if (result && result.response) {
          const fetchedImages = result.response as Array<Record<string, any>>;
          setImages(fetchedImages);
        } else {
          console.error("Failed to get images from unsplash.");
        }
      } catch (error) {
        console.log(error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="h-6 w-6 text-sky-700 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => {
              if (pending) return;
              setSelectedImageId(image.id);
            }}
            className={cn(
              "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",
              {
                "opacity-50 hover:opacity-50 cursor-auto": pending,
              }
            )}
          >
            <Image
              fill
              alt="unsplash image"
              className="object-cover rounded-sm"
              src={image.urls.thumb}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPicker;
