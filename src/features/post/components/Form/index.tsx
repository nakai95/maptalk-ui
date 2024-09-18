"use client";
import { User } from "@/domain";
import { Coordinate } from "@/domain/posts";
import { postAction } from "./actions";
import { useRef } from "react";
import { ActionForm, LocationIcon } from "@/components";

export default function Form({
  user,
  currentLocation,
}: {
  user: User;
  currentLocation: Coordinate;
}) {
  const ref = useRef<HTMLFormElement>(null);
  const action = postAction.bind(null, user.id, currentLocation);
  return (
    <ActionForm
      icon={<LocationIcon />}
      placeholder="What are you doing?"
      actionLabel="Post"
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    />
  );
}
