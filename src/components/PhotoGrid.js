import Image from 'next/image';

// Real job photos with descriptive alt text and a visible caption.
const PhotoGrid = ({ photos }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 ${photos.length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-2 max-w-4xl mx-auto'} gap-6`}>
    {photos.map((photo) => (
      <figure key={photo.alt} className="rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="relative aspect-[3/4]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="p-4 text-sm text-gray-600">{photo.alt}</figcaption>
      </figure>
    ))}
  </div>
);

export default PhotoGrid;
