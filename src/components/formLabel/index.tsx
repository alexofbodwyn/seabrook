import React from "react";

export default function FormLabel({id, text}: {id: string, text: string}) {
  return (
    <label className="label mb-2 mr-4 md:mb-0 md:ml-auto text-stone-600 text-xl font-bold" htmlFor={id}>{text}</label>
  )
}