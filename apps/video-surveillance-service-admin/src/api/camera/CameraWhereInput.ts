import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CameraWhereInput = {
  id?: StringFilter;
  ip?: StringNullableFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  rtspUrl?: StringNullableFilter;
};
