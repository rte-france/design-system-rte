function getNavTabIndex(parentMenuOpen?: boolean): number {
  return parentMenuOpen === false ? -1 : 0;
}

export { getNavTabIndex };
