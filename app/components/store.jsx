// store.ts
import { create } from 'zustand';
import React from 'react';

interface RefStore {
    sharedRef: React.RefObject<HTMLDivElement>;
    setSharedRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

export const useRefStore = create < RefStore > ((set) => ({
    sharedRef: { current: null },
    setSharedRef: (ref) => set(() => ({ sharedRef: ref })),
}));
