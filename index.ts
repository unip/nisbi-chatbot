import dialogflow from "@google-cloud/dialogflow";
import { v4 as uuid } from "uuid";
import figlet from "figlet";

const port = process.env.PORT || 5000;
const projectID = process.env.PROJECT_ID;

async function runSample(query?: string | null) {
  const sessionID = uuid();

  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectID!,
    sessionID
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query ?? "Halo",
        languageCode: "id-ID",
      },
    },
  };

  const response = await sessionClient.detectIntent(request);
  const result = response[0].queryResult?.fulfillmentText;
  const queryText = response[0].queryResult?.queryText;

  if (result) return { user: queryText, bot: result };
  else return Error("No intent matched");
}

const server = Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const nisbi = figlet.textSync("Nisbi", "ANSI Regular");
      const indonesia = figlet.textSync("indonesia", "ANSI Regular");
      const body = `
${nisbi}
${indonesia}
      `;
      return new Response(body);
    }

    if (url.pathname === "/chat") {
      const userQuery = url.searchParams.get("query");

      try {
        const result = await runSample(userQuery);
        return Response.json({ message: "success", result });
      } catch (err) {
        console.error(err);
        return Response.error();
      }
    }

    return new Response("404 Buddy!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
