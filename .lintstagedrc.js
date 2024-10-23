module.exports = {
    "src/**/*.(ts|tsx)": () => "npx tsc --noEmit",
    "src/**/*.(css|scss|ts|tsx)": (filenames) => [`npx prettier --write ${filenames.join(" ")}`],
    "src/**/*.(ts|tsx)": () => "next lint",
};
