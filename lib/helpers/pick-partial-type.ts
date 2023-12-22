import { Type } from "../common";
import { IntersectionType } from "../intersection-type.helper";
import { OmitType } from "../omit-type.helper";
import { PartialType } from "../partial-type.helper";
import { PickType } from "../pick-type.helper";

export const PickPartialType = <T, K extends keyof T>(Entity: Type<T>, keys: K[]) => IntersectionType(
  PartialType(PickType(Entity, keys)),
  OmitType(Entity, keys),
);
