import { AuthContext } from "@/context/AuthContext";
import httpClient from "@/libs/httpClient";
import parseGitHubUrl from "@/libs/parseGitHubUrl";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";

export default function SelectRepoSection({
  page,
  setPage,

  setOwner,
  setRepo,
  handleSubmit,
}) {
  const [tab, setTab] = useState("my-repos");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      className={`${page === 2 ? "" : "hidden"} flex w-full max-w-[50%] flex-col gap-4`}
    >
      <div className="flex overflow-hidden rounded-md">
        <button
          className={`${tab === "my-repos" ? "bg-cyan-600" : "bg-cyan-600/25"} w-full px-4 py-2 text-white transition-all`}
          onClick={() => setTab("my-repos")}
        >
          My repos
        </button>

        <button
          className={`${tab === "url" ? "bg-cyan-600" : "bg-cyan-600/25"} w-full px-4  py-2 text-white transition-all`}
          onClick={() => setTab("url")}
        >
          URL
        </button>
      </div>

      {/* My Repos */}

      {tab === "my-repos" && (
        <MyReposTab
          setOwner={setOwner}
          setRepo={setRepo}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}

      {tab === "url" && (
        <URLRepoTab
          setOwner={setOwner}
          setRepo={setRepo}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}

      {/*  */}

      <div className="absolute bottom-4 flex gap-4 ">
        <button
          className="rounded-md bg-gray-300 px-8 py-2 text-gray-500"
          onClick={() => setPage(1)}
        >
          Back
        </button>

        <button
          className="rounded-md bg-cyan-600 px-8 py-2 text-white"
          onClick={() => {
            if (!selectedItem) {
              toast("Please select a repo", { type: "error" });
              return;
            }

            handleSubmit();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

const MyReposTab = ({ setOwner, setRepo, selectedItem, setSelectedItem }) => {
  const { user } = useContext(AuthContext);

  const [repos, setRepos] = useState({});
  const [loadingFetch, setLoadingFetch] = useState(true);
  const [filterdOrgs, setFilterdOrgs] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    httpClient()
      .get(`github/${user?.userName}/repos`)
      .then((res) => {
        const output = res.data?.data;

        const groupedByOwner = output.reduce((acc, repo) => {
          const ownerLogin = repo.owner.login;
          if (!acc[ownerLogin]) {
            acc[ownerLogin] = { owner: repo.owner, repos: [] };
          }
          acc[ownerLogin].repos.push({
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            private: repo.private,
            owner: repo.owner.login,
          });
          return acc;
        }, {});

        setRepos(groupedByOwner);

        setFilterdOrgs(groupedByOwner);

        setLoadingFetch(false);
      })
      .catch((err) => {
        console.log(err);
        toast("Failed to fetch repos", { type: "error" });
      });
  };

  function searchReposByNameOrOwner(data, query) {
    const result = {};

    Object.keys(data).forEach((key) => {
      const entity = data[key];
      const filteredRepos = entity.repos.filter(
        (repo) =>
          repo.name.toLowerCase().includes(query.toLowerCase()) ||
          entity.owner.login.toLowerCase().includes(query.toLowerCase()),
      );

      if (filteredRepos.length > 0) {
        result[key] = { ...entity, repos: filteredRepos };
      }
    });

    return result;
  }
  const handleSearch = (searchTerm) => {
    if (repos?.length === 0) return;

    setFilterdOrgs(searchReposByNameOrOwner(repos, searchTerm));
  };

  return (
    <div
      className={`flex max-h-[500px] w-full flex-col gap-4 overflow-y-auto rounded-md border border-gray-300 p-4`}
    >
      {/* Search */}
      <input
        type="text"
        placeholder="Search for components or apps"
        className="rounded-md border border-gray-300 p-2"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />

      {loadingFetch ? (
        <p>Loading...</p>
      ) : (
        Object.keys(filterdOrgs).map((owner) => {
          return (
            <div key={owner} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={filterdOrgs[owner].owner.avatar_url}
                  alt="avatar"
                  className="h-8 w-8 rounded-md"
                />

                <h2 className="text-lg font-semibold">{owner}</h2>
              </div>

              <div className="flex flex-col gap-1">
                {filterdOrgs[owner].repos.map((repo) => {
                  return (
                    <button
                      key={repo.id}
                      className={`flex items-center gap-4 rounded-md ${selectedItem?.owner === owner && selectedItem?.repo === repo?.name ? "bg-cyan-600" : "bg-gray-100"} ${selectedItem?.owner === owner && selectedItem?.repo === repo?.name ? "text-white" : "text-black"} hover:bg-gray-20 p-4 transition-all`}
                      onClick={() => {
                        if (
                          selectedItem?.owner === owner &&
                          selectedItem?.repo === repo?.name
                        ) {
                          setSelectedItem(null);
                          setOwner(null);
                          setRepo(null);
                          return;
                        }

                        setOwner(owner);
                        setRepo(repo?.name);

                        setSelectedItem({ owner, repo: repo?.name });
                      }}
                    >
                      {/* <input type="checkbox" /> */}
                      <p className="text-sm">{repo.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

const URLRepoTab = ({ setOwner, setRepo, selectedItem, setSelectedItem }) => {
  const [loading, setLoading] = useState(false);
  const [searchUrl, setSearchUrl] = useState("");

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      // setValue(value);

      setLoading(true);
      const data = parseGitHubUrl(value);

      if (data) {
        console.log(data);

        setOwner(data?.owner);
        setRepo(data?.repoName);

        setSelectedItem({ owner: data?.owner, repo: data?.repoName });
      } else {
        console.log("Invalid URL: ", data);
        toast("Invalid URL", { type: "error" });
      }
      setLoading(false);

      //
    },
    // delay in ms
    1000,
  );

  const handleChange = (event) => {
    console.log(event);
    setSearchUrl(event);

    debounced(event);
  };

  return (
    <div
      className={`flex max-h-[500px] w-full flex-col gap-4 overflow-y-auto rounded-md border border-gray-300 p-4`}
    >
      {/* Search */}
      <input
        type="text"
        placeholder="URL, HTTPS, SSH or Github CLI command"
        className="rounded-md border border-gray-300 p-2"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};
