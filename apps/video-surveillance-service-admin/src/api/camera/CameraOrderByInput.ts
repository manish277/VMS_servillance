import { SortOrder } from "../../util/SortOrder";

export type CameraOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  rtspUrl?: SortOrder;
  updatedAt?: SortOrder;
};
