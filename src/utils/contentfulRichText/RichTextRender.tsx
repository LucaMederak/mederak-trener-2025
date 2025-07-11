//contentful
import { BLOCKS, INLINES, Node } from "@contentful/rich-text-types";

//components
import Image from "next/image";
import DownloadButton from "@/components/downloadButton/DownloadButton";

export interface ExtendedNode extends Node {
  data: {
    target: Target;
  };
  content: {
    value?: string;
  }[];
}

interface Target {
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: {
    file: {
      fileName: string;
      contentType: "image/png" | "application/pdf";
      url: string;
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
    };
    // Dodaj inne właściwości zależnie od potrzeb
  };
}

export const richTextRenderOptions = {
  renderNode: {
    [INLINES.ASSET_HYPERLINK]: (node: ExtendedNode) => {
      if (!node.data?.target?.fields?.file?.url) return null;
      return (
        <DownloadButton
          url={node.data.target.fields.file.url}
          fileName={node.data.target.fields.file.fileName}
          contentValue={node?.content[0].value}
        />
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      return (
        <div className="relative ">
          <Image
            height={
              node.data.target.fields?.file?.details?.image?.height || 400
            }
            width={node.data.target?.fields?.file?.details?.image?.width || 400}
            objectFit="cover"
            src={"https:" + node.data.target.fields.file.url}
            quality={40}
            alt="Natalia Stebel - dietetyk kliniczny"
          ></Image>
        </div>
      );
    },
  },
};
