const ImageStackRow = ({ images, onImageClick }) => {
  return (
    <div className="relative flex h-40 -space-x-8 overflow-visible">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ zIndex: images.length - index }}
          whileHover={{
            scale: 1.1,
            zIndex: 10,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          transition={{ duration: 0.3 }}
          className="relative w-40 h-40 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 bg-slate-700"
          onClick={() => onImageClick(index)}
        >
          <Image
            src="/placeholder.jpg"
            alt={img}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  )
}