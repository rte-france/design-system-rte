Q: Should I use `rteButtonVariant` or the new appearance inputs?

A: Prefer `rteButtonAppearance`, `rteButtonHierarchy`, `rteButtonIsCritical`, and `rteButtonIsReversed`. `rteButtonVariant` remains as a deprecated alias for existing templates. See the migration table in the API section.

Q: How do I disable a button?

A: Set the native `disabled` attribute on the host `<button rteButton disabled>`. There is no separate `isDisabled` input.
