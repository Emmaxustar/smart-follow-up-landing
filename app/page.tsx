"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";

type Locale = "en" | "zh";

const content = {
  en: {
    nav: {
      subhead: "Relationship OS for networkers",
      problem: "Problem",
      workflow: "Workflow",
      extension: "Extension",
      dashboard: "Dashboard",
      difference: "Why us",
      pricing: "Pricing",
      waitlist: "Join waitlist",
    },
    hero: {
      badge: "AI relationship management for networkers",
      title: "Turn event meetings into long-term relationships.",
      body:
        "Smart Follow-Up closes the online-offline relationship loop. It connects LinkedIn, Luma events, event context, follow-up reminders, relationship temperature, and AI suggestions into one clear networking workflow.",
      primary: "Join the waitlist",
      secondary: "See the workflow",
      stats: [
        {
          title: "Offline → Online",
          body: "One continuous relationship loop",
        },
        {
          title: "Context-first",
          body: "Notes, tags, event memory, and timing",
        },
        {
          title: "Relationship-first",
          body: "Thoughtful follow-up without mass outreach",
        },
      ],
    },
    problem: {
      badge: "Problem",
      title: "Most networking value is lost after the event, not during it.",
      body:
        "The hard part is not meeting people. The hard part is remembering context, following up well, and staying consistent over time.",
      cards: [
        {
          title: "Great conversations disappear fast",
          body: "You meet strong people at dinners, mixers, summits, and Luma events, then lose the context that made the relationship valuable.",
        },
        {
          title: "Existing tools only solve fragments",
          body: "Contact exchange, generic CRM records, and message automation each handle one moment, but not the full relationship loop.",
        },
        {
          title: "Networkers need memory, not spam",
          body: "The goal is not mass outreach. The goal is remembering who mattered, why you met, and when to follow up well.",
        },
      ],
    },
    workflow: {
      badge: "Workflow",
      title: "A clear four-step relationship workflow.",
      body:
        "Smart Follow-Up is designed to feel intuitive from the first scroll: meet, capture, follow up, and keep strong people warm.",
      steps: [
        {
          step: "01",
          title: "Meet people offline",
          body: "At events, dinners, demo days, and founder communities, you capture the people worth keeping in touch with.",
        },
        {
          step: "02",
          title: "Attach context immediately",
          body: "Save LinkedIn profiles, notes, tags, event source, and relationship details while the meeting is still fresh.",
        },
        {
          step: "03",
          title: "Get reminded to act",
          body: "Smart Follow-Up surfaces who needs attention and suggests specific next-touch follow-up based on context.",
        },
        {
          step: "04",
          title: "Build long-term relationship memory",
          body: "Relationship temperature and timeline history help you keep strong people warm over time instead of starting from zero every time.",
        },
      ],
    },
    extension: {
      badge: "Chrome Extension",
      title: "Capture context where networking actually happens.",
      body:
        "The extension lives alongside LinkedIn so you can save who someone is, where you met them, and what matters about the relationship before that context fades.",
      features: [
        "LinkedIn profile context inside your workflow",
        "One-click save to relationship CRM",
        "Add tags, notes, and event memory immediately",
        "Generate AI follow-up from profile + meeting context",
      ],
    },
    dashboard: {
      badge: "Web app dashboard",
      title: "See the full relationship picture in one place.",
      body:
        "After the event, the dashboard becomes your relationship command center: who to follow up with, what event they came from, and what the next meaningful action should be.",
      mainTitle: "Relationship command center",
      mainBody:
        "View today's follow-up queue, upcoming events, and the people who need attention next. This is the system that turns scattered networking into a repeatable habit.",
      eventTitle: "Event planning before you walk into the room",
      eventBody:
        "See attendees, mark people you want to meet, and connect event prep directly to post-event follow-up.",
      nfcTitle: "Frictionless connection capture",
      nfcBody:
        "Use your digital profile and NFC entry points to turn in-person interactions into durable records instantly.",
      features: [
        "Daily follow-up queue for warm relationships",
        "Connections organized by temperature, tags, and event source",
        "Event workspace tied to who you want to meet",
        "Shared visibility into who your team knows",
      ],
    },
    difference: {
      badge: "Why Smart Follow-Up",
      title: "A relationship-first layer, not another sales tool.",
      body:
        "The product is built for people who care about long-term network quality, not short-term lead volume.",
      capability: "Capability",
      smart: "Smart Follow-Up",
      crm: "Traditional CRM",
      outreach: "Outreach tools",
      rows: [
        "Built for relationship-driven networking",
        "Connects offline events to online follow-up",
        "Preserves event context and memory",
        "Optimized for thoughtful follow-up, not bulk outreach",
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "One pricing grid. Clear upgrade path.",
      body:
        "Start free, prove the workflow, then upgrade when you want AI follow-up and team-level relationship visibility.",
      ctaWaitlist: "Join waitlist",
      ctaTalk: "Talk to us",
      popular: "Most popular",
      tiers: [
        {
          name: "Free",
          price: "$0",
          subtitle: "Start building a relationship layer",
          features: [
            "Basic CRM",
            "Chrome Extension",
            "Limited saved connections",
          ],
        },
        {
          name: "Pro",
          price: "$12",
          subtitle: "For active networkers who want AI support",
          features: [
            "AI follow-up suggestions",
            "Luma integration",
            "Unlimited connections",
            "Relationship temperature tracking",
          ],
          featured: true,
        },
        {
          name: "Team",
          price: "$29",
          subtitle: "For teams sharing relationship coverage",
          features: [
            "Shared CRM",
            "Team relationship view",
            "Multi-user collaboration",
          ],
        },
      ],
    },
    waitlist: {
      badge: "Waitlist",
      title: "Don't let good relationships expire after the event.",
      body:
        "Smart Follow-Up is for people who want better memory, better timing, and better long-term relationship discipline.",
      placeholder: "Enter your email",
      button: "Request early access",
      empty: "Please enter your email.",
      invalid: "Please enter a valid email address.",
      success:
        "Thanks. This demo waitlist form is active in the UI and ready to connect to your backend.",
    },
    common: {
      month: "/month",
      yes: "Yes",
      partial: "Partial",
      no: "No",
      language: "中文",
    },
  },
  zh: {
    nav: {
      subhead: "面向高频社交者的关系操作系统",
      problem: "问题",
      workflow: "流程",
      extension: "插件",
      dashboard: "控制台",
      difference: "为什么是我们",
      pricing: "定价",
      waitlist: "加入候补名单",
    },
    hero: {
      badge: "面向高频社交者的 AI 关系管理",
      title: "把线下见面，变成长期关系。",
      body:
        "Smart Follow-Up 打通线上与线下的关系闭环，把 LinkedIn、Luma 活动、见面场景、跟进提醒、关系温度和 AI 建议整合成一套清晰的社交流程。",
      primary: "加入候补名单",
      secondary: "查看产品流程",
      stats: [
        {
          title: "线下 → 线上",
          body: "一条连续的关系闭环",
        },
        {
          title: "场景优先",
          body: "笔记、标签、活动记忆与时机",
        },
        {
          title: "关系优先",
          body: "不是群发，而是有温度的跟进",
        },
      ],
    },
    problem: {
      badge: "问题",
      title: "社交的价值，大多不是丢在活动现场，而是丢在活动之后。",
      body:
        "难的不是认识人，难的是记住背景、做好跟进，并长期维持关系温度。",
      cards: [
        {
          title: "好对话很快就消失",
          body: "你在晚宴、聚会、峰会或 Luma 活动里认识了不错的人，但很快就忘了当时那段关系为什么重要。",
        },
        {
          title: "现有工具只解决碎片问题",
          body: "交换联系方式、传统 CRM 和记忆模板各自只解决一个环节，却没有闭合整条关系链路。",
        },
        {
          title: "高质量社交需要记忆，不需要 spam",
          body: "目标不是批量触达，而是记住谁重要、为什么认识、以及什么时候该自然地再联系一次。",
        },
      ],
    },
    workflow: {
      badge: "流程",
      title: "四步看懂整套关系管理逻辑。",
      body:
        "Smart Follow-Up 从第一屏开始就应该是直观的：认识、记录、跟进、维持。",
      steps: [
        {
          step: "01",
          title: "在线下认识人",
          body: "在活动、晚宴、demo day 和创业者社群中，把值得长期保持联系的人记录下来。",
        },
        {
          step: "02",
          title: "立即补充上下文",
          body: "趁记忆还新鲜，立刻保存 LinkedIn、标签、笔记、活动来源和关系细节。",
        },
        {
          step: "03",
          title: "在对的时间提醒你行动",
          body: "Smart Follow-Up 会提示谁需要你跟进，并根据背景给出更具体的下一步建议。",
        },
        {
          step: "04",
          title: "建立长期关系记忆",
          body: "通过关系温度和时间线历史，让重要的人长期保持温度，而不是每次都重新开始。",
        },
      ],
    },
    extension: {
      badge: "Chrome 插件",
      title: "在真正发生社交的地方，立刻记录上下文。",
      body:
        "插件直接贴着 LinkedIn 工作，让你在背景记忆消失前，就保存对方是谁、你们在哪里见过，以及这段关系为什么重要。",
      features: [
        "在流程里直接看到 LinkedIn 资料上下文",
        "一键加入关系 CRM",
        "立即添加标签、笔记和活动记忆",
        "基于资料和见面背景生成 AI 跟进建议",
      ],
    },
    dashboard: {
      badge: "网页控制台",
      title: "在一个地方看清整张关系网络。",
      body:
        "活动结束后，网页端就成了你的关系指挥中心：谁需要跟进、来自哪个活动、下一步该做什么。",
      mainTitle: "关系指挥中心",
      mainBody:
        "查看今天的跟进列表、即将参加的活动，以及下一批需要你投入注意力的人，把分散的社交变成可重复执行的习惯。",
      eventTitle: "进场之前就做好活动规划",
      eventBody:
        "提前查看参会者、标记你想认识的人，并把活动前准备和活动后跟进直接连起来。",
      nfcTitle: "低摩擦的关系录入",
      nfcBody:
        "通过数字名片和 NFC 入口，把线下接触立即变成可持续的关系记录。",
      features: [
        "每日跟进队列，优先处理温热关系",
        "按温度、标签和活动来源管理 connections",
        "活动空间直接连接你想认识的人",
        "让团队共享彼此的人脉视图",
      ],
    },
    difference: {
      badge: "为什么是 Smart Follow-Up",
      title: "这不是另一个销售工具，而是一层关系优先的系统。",
      body:
        "它是为重视长期关系质量的人设计的，不是为追求短期线索数量的人设计的。",
      capability: "能力",
      smart: "Smart Follow-Up",
      crm: "传统 CRM",
      outreach: "群发触达工具",
      rows: [
        "围绕关系驱动型社交流程设计",
        "打通线下活动与线上跟进",
        "保留活动背景与关系记忆",
        "强调有温度的跟进，而不是批量外呼",
      ],
    },
    pricing: {
      badge: "定价",
      title: "一套清晰的定价，一条明确的升级路径。",
      body:
        "先免费体验核心流程，当你需要 AI 跟进和团队级关系视图时再升级。",
      ctaWaitlist: "加入候补名单",
      ctaTalk: "联系我们",
      popular: "最受欢迎",
      tiers: [
        {
          name: "免费版",
          price: "$0",
          subtitle: "先搭起你的关系管理底层",
          features: [
            "基础 CRM",
            "Chrome 插件",
            "有限保存 connections",
          ],
        },
        {
          name: "专业版",
          price: "$12",
          subtitle: "适合需要 AI 协助的高频社交者",
          features: [
            "AI 跟进建议",
            "Luma 集成",
            "无限保存 connections",
            "关系温度追踪",
          ],
          featured: true,
        },
        {
          name: "团队版",
          price: "$29",
          subtitle: "适合共享关系覆盖的团队",
          features: [
            "共享 CRM",
            "团队关系视图",
            "多用户协作",
          ],
        },
      ],
    },
    waitlist: {
      badge: "候补名单",
      title: "不要让好的关系在活动结束后慢慢失温。",
      body:
        "Smart Follow-Up 适合那些想要更好记忆、更好时机判断，以及更强长期关系纪律的人。",
      placeholder: "输入你的邮箱",
      button: "申请抢先体验",
      empty: "请输入你的邮箱。",
      invalid: "请输入有效的邮箱地址。",
      success: "收到。这个演示版候补表单已经可以在界面中交互，下一步可以接入你的真实后端。",
    },
    common: {
      month: "/月",
      yes: "有",
      partial: "部分支持",
      no: "没有",
      language: "EN",
    },
  },
} as const;

const comparisonStates = ["yes", "yes", "yes", "yes"] as const;
const crmStates = ["no", "partial", "partial", "no"] as const;
const outreachStates = ["no", "no", "no", "no"] as const;

function ComparisonPill({
  value,
  locale,
}: {
  value: "yes" | "partial" | "no";
  locale: Locale;
}) {
  const localeText = {
    yes: { en: "Yes", zh: "有" },
    partial: { en: "Partial", zh: "部分支持" },
    no: { en: "No", zh: "没有" },
  };

  const classes =
    value === "yes"
      ? "border-sky-400/25 bg-sky-400/12 text-sky-200"
      : value === "partial"
        ? "border-amber-400/25 bg-amber-400/12 text-amber-200"
        : "border-white/10 bg-white/5 text-slate-400";

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${classes}`}>
      {localeText[value][locale]}
    </span>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = content[locale];

  return (
    <main id="top" className="pb-24">
      <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="section-shell">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/85 px-4 py-3 shadow-glow backdrop-blur-xl md:px-5">
            <a href="#top" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 text-sm font-semibold text-slate-950">
                SF
              </div>
              <div>
                <div className="font-display text-sm font-semibold tracking-wide text-white">
                  Smart Follow-Up
                </div>
                <div className="text-xs text-slate-400">{t.nav.subhead}</div>
              </div>
            </a>

            <div className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
              <a href="#problem" className="transition hover:text-white">
                {t.nav.problem}
              </a>
              <a href="#workflow" className="transition hover:text-white">
                {t.nav.workflow}
              </a>
              <a href="#extension" className="transition hover:text-white">
                {t.nav.extension}
              </a>
              <a href="#dashboard" className="transition hover:text-white">
                {t.nav.dashboard}
              </a>
              <a href="#difference" className="transition hover:text-white">
                {t.nav.difference}
              </a>
              <a href="#pricing" className="transition hover:text-white">
                {t.nav.pricing}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex h-11 items-center rounded-full border border-white/12 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`inline-flex h-9 items-center rounded-full px-4 text-sm transition ${locale === "en" ? "bg-sky-500 text-slate-950" : "text-slate-300 hover:text-white"}`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("zh")}
                  className={`inline-flex h-9 items-center rounded-full px-4 text-sm transition ${locale === "zh" ? "bg-sky-500 text-slate-950" : "text-slate-300 hover:text-white"}`}
                >
                  中文
                </button>
              </div>
              <Button href="#waitlist" variant="secondary" className="hidden sm:inline-flex">
                {t.nav.waitlist}
              </Button>
            </div>
          </nav>
        </div>
      </div>

      <section className="section-shell pt-32">
      </section>

      <section className="section-shell grid gap-12 pt-14">
        <div>
          <Badge>{t.hero.badge}</Badge>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.hero.body}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#waitlist" size="lg">
              {t.hero.primary}
            </Button>
            <Button href="#workflow" size="lg" variant="secondary">
              {t.hero.secondary}
            </Button>
          </div>

          <div className="mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
            {t.hero.stats.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">{item.title}</div>
                <div className="mt-2 text-sm text-slate-400">{item.body}</div>
              </div>
            ))}
          </div>
        </div>

        <Card className="grid-glow relative overflow-hidden border-white/12 bg-slate-950/75 shadow-[0_40px_120px_rgba(2,6,23,0.75)]">
          <CardContent className="grid gap-8 p-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="absolute -right-8 bottom-6 h-48 w-48 rounded-full bg-violet-500/16 blur-3xl" />
              <Image
                src="/images/dashboard.jpg"
                alt="Smart Follow-Up dashboard preview"
                width={2233}
                height={1280}
                className="relative w-full rounded-[28px] border border-white/10 object-cover object-top"
                priority
              />
            </div>
            <div className="max-w-xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
                Product overview
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                A single command center for follow-up, events, and relationship memory.
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                The dashboard gives the viewer immediate context: who needs follow-up, which event the relationship came from, and what action should happen next.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="problem" className="section-shell pt-24">
        <div className="mb-10 max-w-3xl">
          <Badge>{t.problem.badge}</Badge>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
            {t.problem.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{t.problem.body}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.problem.cards.map((point) => (
            <Card key={point.title} className="grid-glow">
              <CardContent>
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{point.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="workflow" className="section-shell pt-24">
        <div className="mb-10 max-w-3xl">
          <Badge>{t.workflow.badge}</Badge>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
            {t.workflow.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{t.workflow.body}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.workflow.steps.map((step) => (
            <Card key={step.step} className="grid-glow">
              <CardContent>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
                  {step.step}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="extension" className="section-shell pt-24">
        <div className="grid gap-8">
          <div>
            <Badge>{t.extension.badge}</Badge>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
              {t.extension.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{t.extension.body}</p>

            <div className="mt-8 grid gap-4">
              {t.extension.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-sky-400" />
                  <p className="text-slate-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="grid-glow overflow-hidden border-white/12 bg-white/5">
            <CardContent className="grid gap-8 p-5 lg:grid-cols-[1fr_0.82fr] lg:items-center">
              <Image
                src="/images/connections.png"
                alt="LinkedIn relationship capture preview"
                width={2940}
                height={1674}
                className="w-full rounded-[28px] border border-white/10 object-cover object-top"
              />
              <div className="max-w-lg">
                <h3 className="text-2xl font-semibold text-white">What the extension is doing</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  This view helps the user understand the job of the extension immediately: save the person, save the context, and turn a profile into a relationship record without leaving the flow.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="dashboard" className="section-shell pt-24">
        <div className="mb-10 max-w-3xl">
          <Badge>{t.dashboard.badge}</Badge>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
            {t.dashboard.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{t.dashboard.body}</p>
        </div>

        <div className="grid gap-8">
          <Card className="grid-glow overflow-hidden border-white/12 bg-white/5">
            <CardContent className="grid gap-8 p-5 lg:grid-cols-[1fr_0.82fr] lg:items-center">
              <Image
                src="/images/dashboard.jpg"
                alt="Dashboard follow-up queue"
                width={2233}
                height={1280}
                className="w-full rounded-[28px] border border-white/10 object-cover object-top"
              />
              <div className="max-w-3xl px-2 py-2">
                <h3 className="text-2xl font-semibold text-white">{t.dashboard.mainTitle}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{t.dashboard.mainBody}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8">
            <Card className="grid-glow overflow-hidden border-white/12 bg-white/5">
              <CardContent className="grid gap-8 p-5 lg:grid-cols-[1fr_0.82fr] lg:items-center">
                <Image
                  src="/images/events.png"
                  alt="Events planning workspace"
                  width={2940}
                  height={1688}
                  className="w-full rounded-[28px] border border-white/10 object-cover object-top"
                />
                <div className="max-w-xl px-2 py-2">
                  <h3 className="text-xl font-semibold text-white">{t.dashboard.eventTitle}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">{t.dashboard.eventBody}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="grid-glow overflow-hidden border-white/12 bg-white/5">
              <CardContent className="grid gap-8 p-5 lg:grid-cols-[1fr_0.82fr] lg:items-center">
                <Image
                  src="/images/nfc-profile.png"
                  alt="NFC profile and digital business card"
                  width={2912}
                  height={1666}
                  className="w-full rounded-[28px] border border-white/10 object-cover object-top"
                />
                <div className="max-w-xl px-2 py-2">
                  <h3 className="text-xl font-semibold text-white">{t.dashboard.nfcTitle}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">{t.dashboard.nfcBody}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {t.dashboard.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-base leading-7 text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="difference" className="section-shell pt-24">
        <div className="mb-8 max-w-3xl">
          <Badge>{t.difference.badge}</Badge>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
            {t.difference.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{t.difference.body}</p>
        </div>

        <Card className="grid-glow overflow-hidden border-white/12 bg-white/5">
          <CardContent className="p-0">
            <div className="grid grid-cols-4 border-b border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-slate-300">
              <div>{t.difference.capability}</div>
              <div className="text-center text-white">{t.difference.smart}</div>
              <div className="text-center">{t.difference.crm}</div>
              <div className="text-center">{t.difference.outreach}</div>
            </div>
            {t.difference.rows.map((row, index) => (
              <div
                key={row}
                className="grid grid-cols-4 items-center border-b border-white/6 px-6 py-4 text-sm last:border-b-0"
              >
                <div className="pr-4 text-slate-200">{row}</div>
                <div className="text-center">
                  <ComparisonPill value={comparisonStates[index]} locale={locale} />
                </div>
                <div className="text-center">
                  <ComparisonPill value={crmStates[index]} locale={locale} />
                </div>
                <div className="text-center">
                  <ComparisonPill value={outreachStates[index]} locale={locale} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="pricing" className="section-shell pt-24">
        <div className="mb-10 max-w-3xl">
          <Badge>{t.pricing.badge}</Badge>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{t.pricing.body}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.pricing.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`grid-glow ${("featured" in tier && tier.featured) ? "border-sky-400/30 bg-slate-950/80 shadow-[0_30px_100px_rgba(14,165,233,0.16)]" : "border-white/12 bg-white/5"}`}
            >
              <CardContent>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{tier.subtitle}</p>
                  </div>
                  {"featured" in tier && tier.featured ? (
                    <div className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-200">
                      {t.pricing.popular}
                    </div>
                  ) : null}
                </div>

                <div className="font-display mt-8 text-5xl font-semibold text-white">
                  {tier.price}
                  <span className="ml-1 text-base font-normal text-slate-400">
                    {t.common.month}
                  </span>
                </div>

                <div className="mt-8 space-y-3 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  href="#waitlist"
                  className="mt-8 w-full"
                  variant={("featured" in tier && tier.featured) ? "default" : "secondary"}
                >
                  {tier.name.includes("Team") || tier.name.includes("团队")
                    ? t.pricing.ctaTalk
                    : t.pricing.ctaWaitlist}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="waitlist" className="section-shell pt-24">
        <Card className="grid-glow overflow-hidden border-white/12 bg-gradient-to-r from-slate-950/90 via-sky-950/70 to-violet-950/60">
          <CardContent className="flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <Badge>{t.waitlist.badge}</Badge>
              <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
                {t.waitlist.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">{t.waitlist.body}</p>
            </div>
            <WaitlistForm
              placeholder={t.waitlist.placeholder}
              buttonText={t.waitlist.button}
              emptyMessage={t.waitlist.empty}
              invalidMessage={t.waitlist.invalid}
              successMessage={t.waitlist.success}
            />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
