#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html
open Fornax.Nfdi4Plants
open Layout

let generate' (ctx : SiteContents) (page: string) =
    let doc =
        ctx.TryGetValues<DocsData> ()
        |> Option.defaultValue Seq.empty
        |> Seq.findBack (fun n -> n.file = page)

    Layout.layout ctx doc.title [
        Components.docsLayout baseUrl doc
    ]

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx