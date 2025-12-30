import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Preview({
  children,
  custom = null,
}: {
  children: React.ReactNode;
  custom?: React.ReactNode;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <div className="relative">
      <motion.div
        layoutId="expandable-card"
        className="w-32 h-32 cursor-pointer"
        onClick={() => setSelectedId("expandable-card")}
      >
        <motion.div className="bg-red-400 w-full h-8">{children}</motion.div>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <>
            {/* Overlay  Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.9 } }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-md z-50"
              onClick={() => setSelectedId(null)}
            />
            {/* Expanded Item */}
            <motion.div
              className="fixed inset-0 m-auto w-96 h-96 bg-white z-50 flex flex-col items-center justify-center shadow-xl rounded-xl"
              onClick={() => setSelectedId(null)}
              layoutId={selectedId}
            >
              {custom ? custom : children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Preview;
