export interface HandleLoadingStatusProps<T> {
  requestFn: () => Promise<T>;
  onSuccess?: () => void;
  disabled?: boolean;
}
