import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs"; // Update the import path accordingly

describe("Tabs components", () => {
  test("renders TabsList, TabsTrigger, and TabsContent correctly", async () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList aria-label="Test Tabs">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    // Check if the TabsTriggers are rendered
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();

    // Check if the first tab content is displayed by default
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();

    // Simulate clicking the second tab
    userEvent.click(screen.getByText("Tab 2"));

    // Check if the second tab content is now displayed
    await waitFor(() => {
      expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });
  });
});
