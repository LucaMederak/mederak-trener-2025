import React, { ComponentProps } from "react";
import { FileIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

//correct
const handleDownloadPdf = async (url: string, name: string) => {
  // Zamień poniższy link na rzeczywisty link do twojego pliku PDF
  const pdfUrl = url;

  try {
    const response = await fetch(pdfUrl);
    const blob = await response.blob();

    // Utwórz adres URL dla pliku
    const url = URL.createObjectURL(blob);

    // Utwórz element a
    const link = document.createElement("a");

    // Ustaw atrybuty dla dynamicznego pobierania pliku
    link.href = url;
    link.download = name; // Możesz dostosować nazwę pliku

    // Dodaj element a do DOM i kliknij na nim, co spowoduje pobranie pliku
    document.body.appendChild(link);
    link.click();

    // Usuń element a z DOM
    document.body.removeChild(link);

    // Zwolnij zasoby po pobraniu pliku
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Błąd pobierania pliku:", error);
  }
};

const DownloadButton = ({
  url,
  fileName,
  contentValue,
  className,
}: {
  url: string;
  fileName: string;
  contentValue?: string;
  className?: ComponentProps<"button">["className"];
}) => {
  return (
    <button
      className={twMerge(
        `flex items-center justify-center flex-col w-full sm:w-40 min-h-44 p-8 gap-4 rounded-md border border-slate-200 border-dashed cursor-pointer bg-white transition ease-out text-blue-950 text-base font-medium ${className}`
      )}
      type="button"
      onClick={() => handleDownloadPdf(url, fileName)}
    >
      <FileIcon className="w-6 h-6 " />
      {contentValue || "Pobierz"}
    </button>
  );
};

export default DownloadButton;
