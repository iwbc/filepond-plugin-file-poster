declare module 'filepond-plugin-file-poster' {
  const FilePondPluginFilePoster: FilePondPluginFilePosterProps
  export interface FilePondPluginFilePosterProps {
    allowFilePoster?: boolean
    filePosterFilterItem?: () => true
    filePosterCrossOriginAttributeValue?: string
  }
  export default FilePondPluginFilePoster
}
