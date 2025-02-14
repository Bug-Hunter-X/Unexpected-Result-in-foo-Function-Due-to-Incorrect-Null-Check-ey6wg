# Unexpected Result in foo Function Due to Incorrect Null Check

This repository contains a JavaScript code example demonstrating a common error in null checks, leading to unexpected behavior. The `foo` function incorrectly handles cases where input parameters `a` and `b` are 0.

## Bug Description

The `foo` function intends to check if parameters `a` and `b` are `null`, and return 0 in such cases, otherwise return their sum. However, this implementation mistakenly treats 0 as `null`, resulting in incorrect calculations when either `a` or `b` is 0.

## Solution

The solution replaces the loose null check (`=== null`) with a more precise check that explicitly handles 0 as a valid input. A strict equality (`===`) check is used to correctly distinguish between `null`, `undefined`, and 0.  This ensures that the function produces the intended results in all cases.
