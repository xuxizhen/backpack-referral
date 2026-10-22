import { permanentRedirect } from "next/navigation";
import { finalPathname } from "@/lib/redirects";
export default function Page() {
  permanentRedirect(finalPathname("/"));
}
