"use client"

import {
  ArrowPathIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  GlobeAmericasIcon,
  LightBulbIcon,
  PlusCircleIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  WalletIcon,
} from "@heroicons/react/24/solid"
import clsx from "clsx"
import { cloneElement, useLayoutEffect, useRef, useState } from "react"

function Section({
  children,
  className,
  cols = 2,
  highlight,
  title,
}: {
  children: React.ReactNode
  className?: string
  cols?: number
  highlight?: boolean
  title?: string
}) {
  return (
    <div className={clsx(highlight && "p-1", className)}>
      <div className={clsx("rounded-md", highlight ? "bg-slate-100 p-5" : "")}>
        {title && (
          <p className="mb-3 text-sm font-medium uppercase text-gray-500">
            {title}
          </p>
        )}

        <div
          className="grid gap-3 gap-x-32"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function Item({
  children,
  icon,
}: {
  children: React.ReactNode
  icon?: React.ReactElement
}) {
  return (
    <div
      className={clsx(
        "flex items-center whitespace-nowrap text-sm text-slate-700",
        icon && "font-medium",
      )}
    >
      {icon && cloneElement(icon, { className: "w-4 h-4 mr-2 text-slate-400" })}
      {children}
    </div>
  )
}

function Menu1() {
  return (
    <div>
      <Section className="p-6" title="By Stage">
        <Item icon={<RocketLaunchIcon />}>Startups</Item>
        <Item icon={<BuildingOfficeIcon />}>Enterprises</Item>
      </Section>

      <div className="w-full border-b border-dashed border-gray-200" />

      <Section className="p-6" title="By Use Case">
        <Item icon={<ArrowPathIcon />}>SaaS</Item>
        <Item icon={<LightBulbIcon />}>Creator Economy</Item>
        <Item icon={<Square3Stack3DIcon />}>Platforms</Item>
        <Item icon={<ChartPieIcon />}>Embedded Finance</Item>
        <Item icon={<PresentationChartLineIcon />}>Ecommerce</Item>
        <Item icon={<GlobeAmericasIcon />}>Global Businesses</Item>
        <Item icon={<BuildingStorefrontIcon />}>Marketplaces</Item>
        <Item icon={<SparklesIcon />}>Finance Automation</Item>
        <Item icon={<WalletIcon />}>Crypto</Item>
      </Section>

      <Section highlight title="By Use Case">
        <Item icon={<PlusCircleIcon />}>App Marketplace</Item>
        <Item icon={<BookOpenIcon />}>Partner Ecosystem</Item>
        <Item icon={<ChatBubbleLeftRightIcon />}>Professional Services</Item>
      </Section>
    </div>
  )
}

function Menu2() {
  return (
    <div>
      <div className="p-6">
        <div className="mb-8 grid grid-cols-[auto_1fr] items-center gap-x-2">
          <BookOpenIcon className="h-4 w-4 text-slate-400" />
          <p className="text-sm font-medium text-gray-800">Documentation</p>
          <p className="col-start-2 text-xs text-gray-500">
            Start integrating Stripe’s products and tools
          </p>
        </div>

        <div className="flex gap-3 gap-x-32 px-6">
          <Section className="flex-1" cols={1} title="Get Started">
            <Item>Prebuilt checkout</Item>
            <Item>Libraries and SDKs</Item>
            <Item>App integrations</Item>
            <Item>Code samples</Item>
          </Section>

          <Section className="flex-1" cols={1} title="Guides">
            <Item>Accept online payments</Item>
            <Item>Manage subscriptions</Item>
            <Item>Send payments</Item>
            <Item>Set up in-person payments</Item>
          </Section>
        </div>
      </div>

      <Section highlight>
        <Item icon={<PlusCircleIcon />}>Full API Reference</Item>
        <Item icon={<BookOpenIcon />}>API Changelog</Item>
        <Item icon={<ChatBubbleLeftRightIcon />}>API Status</Item>
        <Item icon={<ChatBubbleLeftRightIcon />}>Build on Stripe Apps</Item>
      </Section>
    </div>
  )
}

export function StripeNav() {
  const refs = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [styles, setStyles] = useState<React.CSSProperties>({})

  const setRef = (index: number) => (el: HTMLDivElement) => {
    refs.current[index] = el
  }

  useLayoutEffect(() => {
    const ref = refs.current[activeIndex]
    if (!ref) return

    setStyles({
      height: ref.offsetHeight,
      transform: `translateX(${150 * activeIndex}px)`,
      width: ref.offsetWidth,
    })
  }, [activeIndex])

  return (
    <div className="h-screen w-screen bg-slate-50 p-4">
      <ul className="flex gap-8">
        <li className="cursor-pointer" onMouseOver={() => setActiveIndex(0)}>
          Solutions
        </li>
        <li className="cursor-pointer" onMouseOver={() => setActiveIndex(1)}>
          Developers
        </li>
      </ul>

      <div
        className="relative flex rounded-lg shadow-md transition-[height,width,transform] duration-[400ms]"
        style={styles}
      >
        <div
          ref={setRef(0)}
          aria-hidden={activeIndex !== 0}
          className={clsx(
            "absolute transition-all duration-[400ms] aria-hidden:opacity-0",
            activeIndex > 0
              ? "translate-x-16"
              : activeIndex < 0
              ? "-translate-x-16"
              : "",
          )}
        >
          <Menu1 />
        </div>

        <div
          ref={setRef(1)}
          aria-hidden={activeIndex !== 1}
          className={clsx(
            "absolute transition-all duration-[400ms] aria-hidden:opacity-0",
            activeIndex > 1
              ? "translate-x-16"
              : activeIndex < 1
              ? "-translate-x-16"
              : "",
          )}
        >
          <Menu2 />
        </div>
      </div>
    </div>
  )
}
