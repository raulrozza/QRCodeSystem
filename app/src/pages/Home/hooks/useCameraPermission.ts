import { useEffect, useState } from 'react';

// Libs
import * as Permissions from 'expo-permissions';

interface CameraPermission {
  hasCameraPermission: boolean | null;
}

export default function useCameraPermission(): CameraPermission {
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA).then(({ status }) => {
      setHasCameraPermission(status === 'granted');
    });
  }, []);

  return {
    hasCameraPermission,
  };
}
