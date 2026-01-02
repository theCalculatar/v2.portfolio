"use client";
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
  const [layoutId] = useState<string>(
    () => "expandable-card" + crypto.randomUUID().split("-")[0]
  );

  return (
    <div className="relative">
      <motion.div layoutId={layoutId} onClick={() => setSelectedId(layoutId)}>
        {children}
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
              className="fixed inset-0 m-auto w-96 h-56 md:w-2xl md:h-[26rem] bg-white z-50 flex flex-col items-center justify-center shadow-xl rounded-xl"
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
