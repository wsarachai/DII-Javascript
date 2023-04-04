## [Home](../../../README.md) > [Back](../lesson.md) > VSCode Text Editor

### Your tasks:

1. Open file [script.txt](script.txt) and create multi select word:
   - use `Ctrl+Shift+L` for Window or `Cmd+Shift+L` for Mac to select multi word.
   - use `Alt+Click` for Windows or `Cmd+Click` for Mac to create multi cursor.
2. Select every `SCORE` and change to `GOAL`

   ```
     const gameEvents = new Map([
     [17, '⚽ SCORE'],
     [36, '🔁 Substitution'],
     [47, '⚽ SCORE'],
     [61, '🔁 Substitution'],
     [64, '🔶 Yellow card'],
     [69, '🔴 Red card'],
     [70, '🔁 Substitution'],
     [72, '🔁 Substitution'],
     [76, '⚽ SCORE'],
     [80, '⚽ SCORE'],
     [92, '🔶 Yellow card'],
     ]);
   ```

   Change to:

   ```
     const gameEvents = new Map([
     [17, '⚽ GOAL'],
     [36, '🔁 Substitution'],
     [47, '⚽ GOAL'],
     [61, '🔁 Substitution'],
     [64, '🔶 Yellow card'],
     [69, '🔴 Red card'],
     [70, '🔁 Substitution'],
     [72, '🔁 Substitution'],
     [76, '⚽ GOAL'],
     [80, '⚽ GOAL'],
     [92, '🔶 Yellow card'],
     ]);
   ```

3. use `Middle Mouse+Drag` for Windows or `Option key+Drag` for Mac to create a multi cursor and insert space before the child element of the array. The result as shown below:
   ```
     const gameEvents = new Map([
         [17, '⚽ GOAL'],
         [36, '🔁 Substitution'],
         [47, '⚽ GOAL'],
         [61, '🔁 Substitution'],
         [64, '🔶 Yellow card'],
         [69, '🔴 Red card'],
         [70, '🔁 Substitution'],
         [72, '🔁 Substitution'],
         [76, '⚽ GOAL'],
         [80, '⚽ GOAL'],
         [92, '🔶 Yellow card'],
     ]);
   ```
