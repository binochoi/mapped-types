import { Type } from "../common";
import { IntersectionType } from "../intersection-type.helper";
import { OmitType } from "../omit-type.helper";
import { PartialType } from "../partial-type.helper";
import { PickType } from "../pick-type.helper";

/** set optional all props but except some keys */
export const PartialExceptOthersType = <T, K extends keyof T>(Entity: Type<T>, keys: K[]) => IntersectionType(
  PickType(Entity, keys),
  PartialType(OmitType(Entity, keys)),
);
