import React, { useEffect, useRef } from 'react';

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
export const useUpdateEffect = (effect, dependencies = []) => {
  const isInitialMount = useRef(true);

  useEffect(
    // eslint-disable-next-line consistent-return
    () => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        return effect();
      }
    },
    dependencies
  );
};
