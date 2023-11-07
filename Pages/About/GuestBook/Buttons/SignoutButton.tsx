"use client";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";

export default function SignoutButton() {
  return (
    <Button
      className="hover:bg-background"
      variant="ghost"
      onPress={() =>
        signOut({
          callbackUrl: "/about#guestbook",
        })
      }
    >
      Log out
    </Button>
  );
}
