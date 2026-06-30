// This file is auto-generated. Do not edit manually.
// url=https://www.figma.com/design/tKntdNwiF1x3jSpJ9Q0O0q/01.3-Iconography?node-id=88-85
/// <reference types="@figma/code-connect/figma-types" />
import figma from "figma";

const TOGGLABLE_ICON_NAMES = [
  "add-circle",
  "admin-panel-settings",
  "analytics",
  "archive",
  "arrow-circle-chevron-down",
  "arrow-circle-chevron-left",
  "arrow-circle-chevron-right",
  "arrow-circle-chevron-up",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-right",
  "arrow-circle-up",
  "article",
  "assignment",
  "assignment-complete",
  "battery-alert",
  "battery-charging-full",
  "bolt",
  "bolt-alt",
  "bolt-alt-circle",
  "bolt-circle",
  "bookmark",
  "bookmarks",
  "build",
  "calendar-available",
  "calendar-busy",
  "calendar-month",
  "calendar-today",
  "call",
  "cancel",
  "category",
  "chart-add",
  "chart-area",
  "chart-pie",
  "chart-table",
  "chat",
  "chat-alt",
  "chat-alt-unread",
  "chat-unread",
  "check-circle",
  "checkbox",
  "checkbox-indeterminate",
  "circuit-amperemetre",
  "circuit-bulb",
  "circuit-generator",
  "circuit-motor",
  "circuit-voltmetre",
  "clock",
  "cloud",
  "cloud-download",
  "cloud-off",
  "cloud-upload",
  "comment",
  "comment-add",
  "contact",
  "copy",
  "dangerous",
  "dashboard",
  "database",
  "delete",
  "desktop",
  "devices",
  "draft",
  "eco",
  "edit",
  "electric-meter",
  "energy-savings-leaf",
  "eraser",
  "error",
  "event-next",
  "event-repeat",
  "explore",
  "explore-off",
  "export-xls",
  "fast-forward",
  "fast-rewind",
  "feedback",
  "file-copy",
  "file-download",
  "file-upload",
  "filter-alt",
  "filter-alt-off",
  "fire",
  "fit-screen",
  "flag",
  "flash",
  "flash-off",
  "folder",
  "folder-add",
  "folder-move",
  "folder-open",
  "folder-shared",
  "forum",
  "group",
  "group-add",
  "groups",
  "handshake",
  "headphones",
  "heart",
  "help",
  "home",
  "hourglass",
  "image",
  "image-broken",
  "image-gallery",
  "inbox",
  "info",
  "journal",
  "keep",
  "keep-off",
  "label",
  "laptop",
  "left-panel-close",
  "left-panel-open",
  "light-off",
  "lightbulb",
  "lightbulb-alt",
  "lightbulb-circle",
  "linked-services",
  "list-alt",
  "location-add",
  "location-me",
  "location-off",
  "location-on",
  "lock",
  "lock-open",
  "lock-open-right",
  "mail",
  "mail-unread",
  "map",
  "mic",
  "mic-off",
  "mode-dark",
  "mode-light",
  "notification",
  "notification-important",
  "notification-off",
  "notification-unread",
  "palette",
  "pause",
  "pause-circle",
  "photo-camera",
  "play",
  "play-circle",
  "power",
  "power-off",
  "power-plug-connect",
  "power-settings-circle",
  "power-solar",
  "power-switch",
  "power-wind",
  "print",
  "right-panel-close",
  "right-panel-open",
  "save",
  "send",
  "settings",
  "share",
  "skip-next",
  "skip-previous",
  "smartphone",
  "star",
  "sticky-note",
  "stop",
  "stop-circle",
  "subtitles",
  "text-snippet",
  "trash-restore",
  "unarchive",
  "user",
  "user-add",
  "user-circle",
  "user-settings",
  "verified",
  "version",
  "video-camera",
  "video-camera-off",
  "video-gallery",
  "view-agenda",
  "view-column",
  "view-grid",
  "view-kanban",
  "view-module",
  "view-timeline",
  "visibility-hide",
  "visibility-show",
  "volume-down",
  "volume-mute",
  "volume-off",
  "volume-up",
  "warning",
  "waterdrop",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function renderCodeConnectValue(value: unknown): string {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(renderCodeConnectValue).join("").trim();
  }

  if (!isRecord(value)) {
    return "";
  }

  if (typeof value["code"] === "string") {
    return value["code"].trim();
  }

  if (typeof value["value"] === "string") {
    return value["value"];
  }

  if (Array.isArray(value["sections"])) {
    return renderCodeConnectValue(value["sections"]);
  }

  return "";
}

function getConnectedIconName(): string {
  const renderedIcon = figma.properties.instance("icon");
  const renderedIconName = renderCodeConnectValue(renderedIcon);
  if (renderedIconName) {
    return renderedIconName;
  }

  const iconInstance = figma.properties.__instance__("icon");
  if (
    isRecord(iconInstance) &&
    "executeTemplate" in iconInstance &&
    typeof iconInstance["executeTemplate"] === "function"
  ) {
    return renderCodeConnectValue(iconInstance["executeTemplate"]().example);
  }

  return "";
}

const instance = figma.selectedInstance;
const name = getConnectedIconName();
const size = instance.getEnum("size", {
  XS: 12,
  S: 16,
  M: 20,
  L: 24,
  XL: 32,
});
const iconInstanceLayer = instance.findInstance("Icon instance");
const appearance =
  TOGGLABLE_ICON_NAMES.includes(name) && iconInstanceLayer?.type === "INSTANCE"
    ? iconInstanceLayer.getEnum("iconAppearance", {
        outlined: "outlined",
        filled: "filled",
      })
    : undefined;
const appearanceAttribute = appearance ? ` appearance="${appearance}"` : "";

export default {
  id: "Icon",
  example: figma.code`<rte-icon name="${name}" size="${size}"${appearanceAttribute} />`,
  imports: ['import { IconComponent } from "@design-system-rte/angular";'],
};
