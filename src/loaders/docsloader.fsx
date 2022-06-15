// #r "../_lib/Fornax.Core.dll"
// #r "../_lib/Markdig.dll"
#load "../../.paket/load/net5.0/main.group.fsx"

open System.IO
open Fornax.Nfdi4Plants

let contentDir = "docs"

let loader (projectRoot: string) (siteContent: SiteContents) =
    let docsPath = Path.Combine(projectRoot, contentDir)
    // let options = EnumerationOptions(RecurseSubdirectories = true)
    // let files = Directory.GetFiles(docsPath, "*"), options)
    let files = 
        Directory.GetFiles(docsPath, "*")
        |> Array.filter (fun n -> n.EndsWith ".md")
        |> Array.filter (fun n -> n.Contains "README.md" |> not)
    let docs = 
        files 
        |> Array.map (Fornax.Nfdi4Plants.Docs.loadFile projectRoot contentDir)
    docs
    |> Array.iter siteContent.Add

    siteContent.Add({disableLiveRefresh = false})
    siteContent
