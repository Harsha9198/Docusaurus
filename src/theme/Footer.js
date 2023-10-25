import React from 'react'
import Footer from '@theme-original/Footer'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { MendableFloatingButton } from '@mendable/search'

export default function FooterWrapper(props) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()

  return (
    <>
      <MendableFloatingButton anon_key={customFields.mendableAnonKey}
      style={{ accentColor: '#327ef0', darkMode: false }}
      placeholder="Search..."
      dialogPlaceholder="How to get started with CanvasToCode?" />
      <Footer {...props} />
    </>
  )
}