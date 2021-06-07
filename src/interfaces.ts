import { Maincommand, Subcommand } from "../mod.ts";

/**
 * The signature of the logger's methods.
 */
export type TLogMethod = (message: string) => void;

/**
 * This CLI's configs.
 *
 * name - The CLI's name.
 *
 * description - The CLI's description.
 *
 * command - The CLI's main command. This is the command used to run th CLI.
 *
 * subcommands - An array of Subcommand classes.
 *
 * maincommand - Class to handle usage of the CLI is its a single command CLI
 *
 * version - This CLI's version.
 */
export type ILineConfigs = {
  name: string;
  description: string;
  command: string;
  version: string;
  subcommands?: typeof Subcommand[];
  maincommand?: typeof Maincommand;
};

/**
 * This CLI's logger.
 *
 * debug - Log a debug message. Outputs "DEBUG some message".
 *
 * error - Log an error message. Outputs "ERROR some message".
 *
 * info - Log an info message. Outputs "INFO some message".
 *
 * warn - Log an warning message. Outputs "WARN some message".
 */
export interface ILogger {
  debug: TLogMethod;
  error: TLogMethod;
  info: TLogMethod;
  warn: TLogMethod;
}
