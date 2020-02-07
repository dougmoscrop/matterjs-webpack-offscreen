const a = new Array(10).fill().map(() => {
    return [
      new Int32Array(32 * 8), // stats
      new Float32Array(32 * 8) // position, quaternion
    ];
  });